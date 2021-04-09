# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class n extends ([] = x) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "n",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 19
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 21,
                            "end": 23
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 24
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 24
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 26,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "class n extends ([] = x) {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

