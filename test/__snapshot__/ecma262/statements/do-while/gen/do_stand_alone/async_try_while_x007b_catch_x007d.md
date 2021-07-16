# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_stand_alone
> :: test: do stand alone
> :: case: async try while { catch }
## Options

`````js
{}
`````
## Input

`````js
do async try while { catch }
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
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 8
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 12
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 18
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "catch",
                            "rawText": "catch",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 26
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 18,
                "end": 28
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 28,
                "end": 28
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 12,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8
✖ '; ' expected - start: 8, end: 12
✖ 'catch' expected - start: 12, end: 18
✖ Missing an opening parentheses - '( - start: 19, end: 20
✖ Property definition expected. Did you mean to use a ':'? - start: 26, end: 28
✖ Declaration or statement expected - start: 27, end: 28

```

