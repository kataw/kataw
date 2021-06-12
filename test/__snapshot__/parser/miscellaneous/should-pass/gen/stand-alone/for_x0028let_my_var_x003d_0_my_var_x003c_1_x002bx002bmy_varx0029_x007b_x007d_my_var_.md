# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for (let my_var = 0; my_var < 1; ++my_var) { } my_var;
## Options

`````js
{}
`````
## Input

`````js
for (let my_var = 0; my_var < 1; ++my_var) { } my_var;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 8,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 19
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 19
            },
            "condition": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 32,
                    "end": 35
                },
                "operand": {
                    "kind": 134299649,
                    "text": "my_var",
                    "rawText": "my_var",
                    "flags": 96,
                    "start": 35,
                    "end": 41
                },
                "flags": 32,
                "start": 32,
                "end": 41
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "my_var",
                    "rawText": "my_var",
                    "flags": 96,
                    "start": 20,
                    "end": 27
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 64,
                    "start": 27,
                    "end": 29
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "flags": 32,
                "start": 20,
                "end": 31
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 44,
                    "end": 44
                },
                "flags": 16,
                "start": 42,
                "end": 46
            },
            "flags": 80,
            "start": 0,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 46,
                "end": 53
            },
            "flags": 16,
            "start": 46,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "for (let my_var = 0; my_var < 1; ++my_var) { } my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

for (const; ++my_var; my_var  < 1)
  {}
my_var;
```

### Diagnostics

```javascript
✔ No errors
```

