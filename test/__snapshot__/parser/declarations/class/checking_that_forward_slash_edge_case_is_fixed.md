# Kataw parser test case

## Input

`````js
class x { static / foo(){} }
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

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "static",
                            "rawText": "static",
                            "flags": 768,
                            "start": 9,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 16
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 16,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 18,
                        "end": 22
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 18,
                    "end": 24
                },
                "flags": 256,
                "start": 16,
                "end": 24
            },
            "flags": 128,
            "start": 16,
            "end": 24
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 25,
                "end": 25
            },
            "flags": 128,
            "start": 24,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "class x { static / foo(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 16, end: 18
✖ Statement expected - start: 26, end: 28

```

