# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: var x = 42;/*\n*/-->is eol-comment\nvar y = 37;
## Options

`````js
{}
`````
## Input

`````js
var x = 42;/*\n*/-->is eol-comment\nvar y = 37;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 7,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 11,
                        "end": 19
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 19,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "is",
                    "rawText": "is",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 11,
                "end": 22
            },
            "flags": 16,
            "start": 11,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "eol",
                    "rawText": "eol",
                    "flags": 96,
                    "start": 22,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 134299649,
                    "text": "comment",
                    "rawText": "comment",
                    "flags": 96,
                    "start": 27,
                    "end": 34
                },
                "flags": 32,
                "start": 22,
                "end": 34
            },
            "flags": 16,
            "start": 22,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nvar",
                "rawText": "nvar",
                "flags": 96,
                "start": 35,
                "end": 39
            },
            "flags": 16,
            "start": 35,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 39,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 201392130,
                    "text": 37,
                    "rawText": "37",
                    "flags": 96,
                    "start": 43,
                    "end": 46
                },
                "flags": 32,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 39,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "var x = 42;/*\\n*/-->is eol-comment\\nvar y = 37;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 19, end: 20
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 19, end: 20
✖ Expected a `;` - start: 22, end: 26
✖ Invalid hexadecimal escape sequence - start: 27, end: 34
✖ Invalid hexadecimal escape sequence - start: 34, end: 34
✖ Expected a `;` - start: 34, end: 35
✖ Expected a `;` - start: 39, end: 41

```

