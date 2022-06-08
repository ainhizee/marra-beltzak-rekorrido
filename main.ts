DFRobotMaqueenPlus.I2CInit()
let atala_1 = 1
let atala2 = 0
basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 10) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
basic.forever(function () {
    if (atala_1 == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            }
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            }
        }
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
        atala_1 = 0
        atala2 = 1
    }
})
basic.forever(function () {
    if (atala2 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
        basic.pause(845)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        atala2 = 0
        atala_1 = 1
    }
})
