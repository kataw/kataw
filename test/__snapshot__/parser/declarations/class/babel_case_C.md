# Kataw parser test case

## Input

`````js
(class{}
 / foo / g)
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 1,
                                "start": 0,
                                "end": 6
                            },
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 8,
                            "start": 513,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 15,
                        "start": 512,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(class{}\n / foo / g)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

