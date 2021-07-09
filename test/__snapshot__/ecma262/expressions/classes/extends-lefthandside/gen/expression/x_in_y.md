# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: x in y
## Options

`````js
{}
`````
## Input

`````js
(class B extends x in y {})
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
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 8,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 1,
                    "end": 23
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(class B extends x in y {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 19, end: 21
✖ Expected a ')' to match the '(' token here - start: 24, end: 25
✖ Declaration or statement expected - start: 26, end: 27

```

