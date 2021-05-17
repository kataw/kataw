# Kataw parser test case

## Input

`````js
class C { static #aaa }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 16
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67174651,
                            "text": "#aaa",
                            "flags": 96,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 16,
                        "end": 21
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class C { static #aaa }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

class C {
  static #aaa;
}
```

### Diagnostics

```javascript
✔ No errors
```

