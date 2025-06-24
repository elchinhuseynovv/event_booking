import React from 'react';
import { Calendar, Music, Users, Award, CheckCircle, Headphones, Globe, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">ABOUT RAW MEDIA</h1>
          <p className="text-xl text-neutral-300">
            WE REPRESENT SOUND VISION AND CULTURE
          </p>
        </div>
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="mb-6">ABOUT RAW MEDIA</h2>
            <p className="text-neutral-300 mb-4">
              Based in Poland and operating across Europe and beyond, RAW MEDIA is a multidisciplinary talent agency representing artists who don't just perform — they define the visual and sonic aesthetics of the underground.
            </p>
            <p className="text-neutral-300 mb-4">
              We book DJs and producers, manage visual artists and VJs, and deliver full scale documentation through cinematic photography and video. We act as both an agency and a cultural engine, curating talent, producing content and building moments that last beyond the night.
            </p>
            <p className="text-neutral-300 mb-4">
              From underground warehouses in Warsaw to international stages, we represent the artists shaping tomorrow's culture. Our approach combines strategic artist development with deep cultural understanding, ensuring our talents thrive in an ever-evolving creative landscape.
            </p>
            <p className="text-neutral-300">
              We connect visionary talents with promoters, festivals and cultural institutions worldwide, fostering authentic connections that transcend boundaries and create lasting impact in the global underground scene.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
            <img 
              src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/sitephotos/about.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlcGhvdG9zL2Fib3V0LmpwZyIsImlhdCI6MTc1MDM1NjA1NSwiZXhwIjoyMTgyMzU2MDU1fQ.PbU7NtLDNrZZtc4gWb6ZhzsW_b6z_PVccGg9SGrENvc" 
              alt="RAW MEDIA team and artists" 
              className="rounded-2xl w-full relative z-10"
            />
          </div>
        </div>

        {/* Trusted Partners Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">TRUSTED PARTNERS</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              WE'VE COLLABORATED WITH LEADING BRANDS, FESTIVALS, AND CULTURAL INSTITUTIONS ACROSS EUROPE
            </p>
          </div>
          
          <div className="bg-background-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {/* Boiler Room */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/Boiler+Room%20agg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL0JvaWxlcitSb29tIGFnZy5wbmciLCJpYXQiOjE3NTA3ODc2NDAsImV4cCI6MjE4Mjc4NzY0MH0.aMT0XoH7orrR5iKbLHRN3la9jpFQTnl0T0cmQ9rCvfQ"
                  alt="Boiler Room"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Laboratorium */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/laboratorium%20%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL2xhYm9yYXRvcml1bSAgKDEpLnBuZyIsImlhdCI6MTc1MDc4NzY0NywiZXhwIjoyMTgyNzg3NjQ3fQ.4bNNmtpWQcZXPcig7BTvqTnvXIgo2iQ72IJyYU2bqAE"
                  alt="Laboratorium"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Verknipt */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/logo_verknipt-2048x269.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL2xvZ29fdmVya25pcHQtMjA0OHgyNjkud2VicCIsImlhdCI6MTc1MDc4NzY1NCwiZXhwIjoyMTgyNzg3NjU0fQ.RBGE0s5hYjeNAx7cZtActlfqzi_8Ymj1UZUpkWCL38w"
                  alt="Verknipt"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Oczki */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/oczki_logo_wersja%20podst._biale.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL29jemtpX2xvZ29fd2Vyc2phIHBvZHN0Ll9iaWFsZS5wbmciLCJpYXQiOjE3NTA3ODc2NjEsImV4cCI6MjE4Mjc4NzY2MX0.t3CjGu9-HkonsGA2wDWT7CvaIZss-k8FCt_Mcp0LO3g"
                  alt="Oczki"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Orange */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/orange.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL29yYW5nZS5wbmciLCJpYXQiOjE3NTA3ODc2NjksImV4cCI6MjE4Mjc4NzY2OX0.DlmAdFcIcfmSaubqwG42pplqgUTCS13fxZ1_30HWwVE"
                  alt="Orange"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Prozak */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/prozak_gzwuzw%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL3Byb3pha19nend1encgKDEpLnBuZyIsImlhdCI6MTc1MDc4NzY3NiwiZXhwIjoyMTgyNzg3Njc2fQ.uh8HvhZQGOrezhYT4OhXUHE3K22DYvJEdMAYGZenI5I"
                  alt="Prozak"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Teletech */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/teletech.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL3RlbGV0ZWNoLnBuZyIsImlhdCI6MTc1MDc4NzY4MiwiZXhwIjoyMTgyNzg3NjgyfQ.6fiV54wMendZRp1GvK2_0vf8Q_LM_nVar2_JcDffMAU"
                  alt="Teletech"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* T-Mobile */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/t-mobile.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL3QtbW9iaWxlLnBuZyIsImlhdCI6MTc1MDc4NzY4OCwiZXhwIjoyMTgyNzg3Njg4fQ.NKCJp8SI4Mfbdy1FEPjVPuH5jSADFtbWJSLyZA1yeJI"
                  alt="T-Mobile"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Ignis Nacht */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/transparent%20background%20ignis%20nacht%20title.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL3RyYW5zcGFyZW50IGJhY2tncm91bmQgaWduaXMgbmFjaHQgdGl0bGUucG5nIiwiaWF0IjoxNzUwNzg3Njk0LCJleHAiOjIxODI3ODc2OTR9.q80eo24wE54HXyLjPipLszUdseWtysDu171YskZVTs8"
                  alt="Ignis Nacht"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Ultra */}
              <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-neutral-800 transition-colors duration-300 group">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/Collabs/ultraaa.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9Db2xsYWJzL3VsdHJhYWEucG5nIiwiaWF0IjoxNzUwNzg3NzAwLCJleHAiOjIxODI3ODc3MDB9.Wh0JrV95qSKrc31c0JBFWmaGUpgvQXw5D3G6BZ4bLQM"
                  alt="Ultra"
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-neutral-400 text-sm">
                From underground events to major festivals, we've delivered exceptional talent and creative services to industry leaders across Europe.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section - Updated for new starter */}
        <div className="bg-background-light rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">OUR GROWING IMPACT</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              BUILDING MEANINGFUL CONNECTIONS ACROSS THE GLOBAL ELECTRONIC MUSIC SCENERY
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-primary text-4xl font-bold mb-2">5+</div>
              <div className="text-neutral-300">Represented Artists</div>
            </div>
            <div className="p-6">
              <div className="text-secondary text-4xl font-bold mb-2">300+</div>
              <div className="text-neutral-300">Events Completed</div>
            </div>
            <div className="p-6">
              <div className="text-accent text-4xl font-bold mb-2">500+</div>
              <div className="text-neutral-300">Cultural Connections</div>
            </div>
            <div className="p-6">
              <div className="text-success text-4xl font-bold mb-2">100%</div>
              <div className="text-neutral-300">Underground Authenticity</div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">OUR VALUES</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              THESE CORE PRINCIPLES GUIDE EVERYTHING WE DO AT RAW MEDIA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Music className="h-10 w-10" />,
                title: "CULTURAL VISION",
                description: "We represent artiss who defines the scenery."
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "AUTHENTIC CONNECTIONS",
                description: "Building genuine relationships between visionary talents and cultural institutions worldwide."
              },
              {
                icon: <Headphones className="h-10 w-10" />,
                title: "SOUND & VISION",
                description: "Curating multidisciplinary talent across music, visual arts, and media creation."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "SPIRIT OF ELECTRONIC SCENERY",
                description: "Preserving the authentic spirit of underground culture while expanding global reach."
              }
            ].map((value, index) => (
              <div key={index} className="bg-background-light p-8 rounded-xl">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-background-light rounded-2xl p-12">
          <h2 className="mb-6">READY TO CONNECT WITH UNDERGROUND CULTURE?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            DISCOVER ARTISTS WHO DEFINE TOMORROW'S SOUND, VISION AND CULTURE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary glow">
              Explore Artists
            </button>
            <button className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;