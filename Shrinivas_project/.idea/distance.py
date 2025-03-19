from einsteinpy.geodesic import Geodesic
from einsteinpy.plotting import StaticGeodesicPlotter
from einsteinpy.metric import Schwarzschild
import numpy as np

# Define the initial conditions for the geodesic
position = [40, np.pi / 2, 0.]  # Initial position in spherical coordinates (r, theta, phi)
momentum = [0., 0., 3.834]  # Initial momentum in spherical coordinates (pr, ptheta, pphi)
a = 0.  # Spin parameter of the black hole (0 for Schwarzschild)
end_lambda = 100.  # Affine parameter lambda
step_size = 0.0005  # Step size for the geodesic integration

# Define the metric (Schwarzschild spacetime in this case)
M = 1.0  # Mass of the black hole
metric = Schwarzschild(M=M)

# Define the metric parameters (for Schwarzschild, this is just the mass)
metric_params = (M,)

# Create the Geodesic object
geodesic = Geodesic(
    position=position,
    momentum=momentum,
    a=a,
    end_lambda=end_lambda,
    step_size=step_size,
    metric=metric,
    metric_params=metric_params
)

# Initialize the plotter
plotter = StaticGeodesicPlotter()

# Plot the geodesic
plotter.plot(geodesic)

# Show the plot
plotter.show()