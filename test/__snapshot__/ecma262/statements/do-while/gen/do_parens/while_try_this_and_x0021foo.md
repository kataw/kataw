# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: while try this and !foo
## Options

`````js
{}
`````
## Input

`````js
do( while try this and !foo while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 3
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 3
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 9,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 4276321,
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 18,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 27
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 27,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "do( while try this and !foo while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 9
✖ Missing an opening parentheses - '( - start: 10, end: 13
✖ Declaration or statement expected - start: 13, end: 18
✖ Expected a `;` - start: 18, end: 22
✖ Expected a `;` - start: 22, end: 24
✖ Expected a `;` - start: 27, end: 33

```

