import * as alt from 'alt-server';

import JobEnums, { Objective } from '../../shared/interfaces/Job';
import { playerFuncs } from '../../server/extensions/Player';
import { JobTrigger } from '../../shared/interfaces/JobTrigger';
import { distance2d } from '../../shared/utility/vector';
import { SYSTEM_EVENTS } from '../../shared/enums/system';
import { Job } from '../../server/systems/job';
import { ANIMATION_FLAGS } from '../../shared/flags/AnimationFlags';

export const startPosition = { "x": 2958.869873046875, "y": 2753.557861328125, "z": 43.70643997192383 - 1 };
const miningTime = 5000; // 5000ms = 5 seconds

const jobTriggerHeader = 'Welcome to the Los Santos Diamondmine!';
const jobTriggerSummary = 'Here you can mine for stones or whatever.';
const jobTriggerImage = 'https://i.imgur.com/Gi887Wk.png'; // Basic image from the jewelry heist job

const toFarAwayNotification = '~r~Too far away...';

const blipSprite = 100;
const blipColor = 0;
const blipText = 'Miningspot';
const blipScale = 1;
const descriptionText = 'Placeholder';

// Job-Particles Setup
const particleDict = 'scr_indep_fireworks';
const particleName = 'scr_indep_firework_starburst';
const particleScale = 1;

const validMiningSpots = [
    { "x": 2936.887939453125, "y": 2786.761962890625, "z": 39.81045150756836 - 1 },
    { "x": 2958.855224609375, "y": 2774.098876953125, "z": 39.99577713012695 - 1 },
    { "x": 2982.470458984375, "y": 2762.755126953125, "z": 42.956573486328125 - 1 },
    { "x": 2978.524658203125, "y": 2792.116455078125, "z": 40.806785583496094 - 1 },
    { "x": 2930.50439453125, "y": 2761.294677734375, "z": 44.670711517333984 - 1 },
    { "x": 2921.51806640625, "y": 2797.514892578125, "z": 41.021400451660156 - 1 },
    { "x": 2943.772216796875, "y": 2817.402587890625, "z": 42.81153869628906 - 1 },
    { "x": 2954.765869140625, "y": 2820.741943359375, "z": 42.69182205200195 - 1 },
    { "x": 2955.009521484375, "y": 2757.622802734375, "z": 43.67549514770508 - 1 },
    { "x": 2948.525146484375, "y": 2739.68408203125, "z": 44.40243148803711 - 1 },
]
let actualSpot = 0;

const objectives: Array<Objective> = [
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[0] as alt.Vector3,
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[0] as alt.Vector3,
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    },
    {
        criteria: JobEnums.ObjectiveCriteria.NO_VEHICLE,
        type: JobEnums.ObjectiveType.WAYPOINT,
        description: descriptionText,
        range: 3,
        pos: validMiningSpots[actualSpot = getRandomInt(10)],
        eventCall: {
            eventName: 'Minejob:HandleFarming',
            isServer: true
        },
        blip: {
            text: blipText,
            pos: validMiningSpots[actualSpot],
            sprite: blipSprite,
            color: blipColor,
            scale: blipScale,
            shortRange: true
        },
        particle: {
            pos: validMiningSpots[actualSpot],
            dict: particleDict,
            name: particleName,
            scale: particleScale,
            duration: miningTime
        }
    }
];

alt.on('Minejob:StartMining', (player: alt.Player) => {
    if (distance2d(player.pos, startPosition) > 5) {
        playerFuncs.emit.notification(player, toFarAwayNotification);
        return;
    }

    const job = new Job();
    job.loadObjectives(objectives);
    job.addPlayer(player);
});

alt.on('Minejob:HandleFarming', (player: alt.Player) => {
    playerFuncs.emit.animation(player, "amb@world_human_const_drill@male@drill@base", "base", ANIMATION_FLAGS.REPEAT, miningTime);
    alt.setTimeout(() => {
        // Give the player some items or whatever.
    }, miningTime)
});

export function handleStartJob(player: alt.Player) {
    const trigger: JobTrigger = {
        header: jobTriggerHeader,
        event: 'Minejob:StartMining',
        image: jobTriggerImage,
        summary: jobTriggerSummary
    };
    alt.emitClient(player, SYSTEM_EVENTS.INTERACTION_JOB, trigger);
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}