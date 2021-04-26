# Kataw parser test case

## Input

`````js
typeof class{}
/foo/
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 768,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 768,
                                "start": 6,
                                "end": 12
                            },
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 19,
                    "end": 20
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 20,
                    "end": 20
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
    "text": "typeof class{}\n/foo/",
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
@{x2716}@ Expression expected - start: 20, end: 20

```

