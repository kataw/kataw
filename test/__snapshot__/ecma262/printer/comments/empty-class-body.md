while-statement6# Kataw parser test case

## Input

`````js
 class Something {
 // comment
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "Something",
                "rawText": "Something",
                "flags": 96,
                "start": 6,
                "end": 16
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": " class Something {\n // comment\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

  class Something {
   // comment
  }

```

### Diagnostics

```javascript
✔ No errors
```

