# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: async
>          x
## Options

`````js
{}
`````
## Input

`````js
(class B extends async
x {})
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
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
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 16,
                                "end": 22
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 16,
                            "end": 22
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 8,
                        "start": 32,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 22
                },
                "flags": 0,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "start": 22,
                "end": 24
            },
            "flags": 16,
            "start": 22,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "(class B extends async\nx {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 23, end: 24
✖ Expected a `;` - start: 24, end: 26
✖ Declaration or statement expected - start: 27, end: 28

```

