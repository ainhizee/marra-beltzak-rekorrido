DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
            }
        }
    }
})
