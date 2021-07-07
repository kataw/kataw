# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: x = class extends (a ? null : yield) { }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; x = class extends (a ? null : yield) { }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "consequent": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 41
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 49
                                    },
                                    "flags": 96,
                                    "transformFlags": 4096,
                                    "start": 31,
                                    "end": 49
                                },
                                "flags": 31,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 50
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 50
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 23,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 54
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 54
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "'use strict'; x = class extends (a ? null : yield) { }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

"'use strict'";
x = class extends (a ? null : yield) {};
```

### Diagnostics

```javascript
✔ No errors
```

