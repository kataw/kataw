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
                "text": "n",
                "rawText": "n",
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
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 19,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 24
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "class n extends ([] = x) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

class n  {}
```

### Diagnostics

```javascript
✔ No errors
```

