# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: do if (a) with (b) continue; else debugger; while (false)
## Input

`````js
{ do if (a) with (b) continue; else debugger; while (false) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 169,
                        "doKeyword": {
                            "kind": 4202580,
                            "flags": 80,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 53,
                            "end": 58
                        },
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 64,
                            "start": 45,
                            "end": 51
                        },
                        "statement": {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 80,
                                "start": 4,
                                "end": 7
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 9,
                                "end": 10
                            },
                            "consequent": {
                                "kind": 153,
                                "withKeyword": {
                                    "kind": 37757029,
                                    "flags": 80,
                                    "start": 11,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 19
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "start": 20,
                                        "end": 29
                                    },
                                    "label": null,
                                    "flags": 16,
                                    "start": 20,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 30
                            },
                            "elseKeyword": {
                                "kind": 4194389,
                                "flags": 64,
                                "start": 30,
                                "end": 35
                            },
                            "alternate": {
                                "kind": 171,
                                "debuggerKeyword": {
                                    "kind": 37757010,
                                    "flags": 80,
                                    "start": 35,
                                    "end": 44
                                },
                                "flags": 16,
                                "start": 35,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 59
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "{ do if (a) with (b) continue; else debugger; while (false) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

{
  do if (a) with (b) continue;
    else  debugger;
  while (false);
}
```

### Diagnostics

```javascript
✔ No errors
```

