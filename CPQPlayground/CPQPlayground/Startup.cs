using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CPQPlayground.Startup))]
namespace CPQPlayground
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
