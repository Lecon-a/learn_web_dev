# To add css to your html file, use the following methods

- Inline styling
```
    <p style="color:red; background-color: black;">This is how we add inline style</p>

    <open tagname>content</close tagname> <<= this is called html element
``` 

- Internal styling
```
<head>
    <style>
        #para {
            color: white;
            background-color: black;
            padding: 2rem;
        }
    </style>
</head>

<body>
    <p id="para" class="para">This is how we add inline style</p>
</body>
```

- External styling
```
    create an external file with the extension of css e.g style.css

    import the file into html file
    How do we do this?

    <head>
        <link rel="stylesheet" href="cssFileName.css">
    </head>
```