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

### CST

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
                                "flags": 64,
                                "start": 1,
                                "end": 6
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 7,
                                    "end": 7
                                },
                                "flags": 6,
                                "start": 32,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 65,
                            "start": 8,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(class{}\n / foo / g)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

(class  {} / foo / g);
```

### Diagnostics

```javascript
✔ No errors
```

