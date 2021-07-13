# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: oh,no
## Options

`````js
{}
`````
## Input

`````js
(class B extends oh,no {})
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
                    "kind": 132,
                    "expressions": [
                        {
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
                                        "text": "oh",
                                        "rawText": "oh",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
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
                            "end": 19
                        },
                        {
                            "kind": 134299649,
                            "text": "no",
                            "rawText": "no",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(class B extends oh,no {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 19, end: 20
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ Declaration or statement expected - start: 25, end: 26

```

