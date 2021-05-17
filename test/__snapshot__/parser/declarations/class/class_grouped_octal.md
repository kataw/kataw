# Kataw parser test case

## Input

`````js
class x extends y{}(09)
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 9,
                    "rawText": "09",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "start": 19,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class x extends y{}(09)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

class x  {}
(09);
```

### Diagnostics

```javascript
✔ No errors
```

