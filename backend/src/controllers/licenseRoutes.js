const License = require('../models/License');

// Validar licença
exports.validateLicense = async (req, res) => {
    try {
        const { licenseKey } = req.body;

        // Buscar licença
        const license = await License.findOne({
            where: { licenseKey },
            include: ['Client']
        });

        if (!license) {
            return res.status(404).json({
                valid: false,
                message: 'Licença não encontrada'
            });
        }

        if (!license.isActivated) {
            return res.status(400).json({
                valid: false,
                message: 'Licença não ativada'
            });
        }

        if (license.expiresAt && license.expiresAt < new Date()) {
            return res.status(400).json({
                valid: false,
                message: 'Licença expirada'
            });
        }

        res.json({
            valid: true,
            plan: license.planType,
            expiresAt: license.expiresAt,
            client: {
                name: license.Client.name,
                clinicName: license.Client.clinicName
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ativar licença
exports.activateLicense = async (req, res) => {
    try {
        const { licenseKey, clientId } = req.body;

        const license = await License.findOne({
            where: { licenseKey, clientId }
        });

        if (!license) {
            return res.status(404).json({
                success: false,
                message: 'Licença não encontrada'
            });
        }

        if (license.isActivated) {
            return res.status(400).json({
                success: false,
                message: 'Licença já ativada'
            });
        }

        license.isActivated = true;
        license.activatedAt = new Date();
        await license.save();

        res.json({
            success: true,
            message: 'Licença ativada com sucesso'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};