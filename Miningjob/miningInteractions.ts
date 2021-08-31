import { BlipController } from '../../server/systems/blip';
import { InteractionController } from '../../server/systems/interaction';
import { TextLabelController } from '../../server/systems/textlabel';
import { handleStartJob, startPosition } from './Minejob';

TextLabelController.append({
    uid: 'minesystem-Mining',
    data: '[~g~JOB~w~] Bergarbeiter',
    pos: startPosition,
    maxDistance: 10
});

BlipController.add({
    text: '[~g~JOB~w~] Bergarbeiter',
    scale: 1,
    color: 53,
    sprite: 617,
    pos: startPosition,
    shortRange: true
});

InteractionController.add({
    callback: handleStartJob,
    type: 'miningSystem',
    position: startPosition,
    description: 'Jobmenü öffnen'
});