# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: do if (a) with (b) continue; else debugger; while (false)
## Options

`````js
{}
`````
## Input

`````js
do if (a) with (b) continue; else debugger; while (false)
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
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                "consequent": {
                    "kind": 153,
                    "withKeyword": {
                        "kind": 37757029,
                        "flags": 80,
                        "start": 9,
                        "end": 14
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 16,
                        "end": 17
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "start": 18,
                            "end": 27
                        },
                        "label": null,
                        "flags": 16,
                        "start": 18,
                        "end": 28
                    },
                    "flags": 80,
                    "start": 9,
                    "end": 28
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 64,
                    "start": 28,
                    "end": 33
                },
                "alternate": {
                    "kind": 171,
                    "debuggerKeyword": {
                        "kind": 37757010,
                        "flags": 80,
                        "start": 33,
                        "end": 42
                    },
                    "flags": 16,
                    "start": 33,
                    "end": 43
                },
                "flags": 80,
                "start": 2,
                "end": 43
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 43,
                "end": 49
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 51,
                "end": 56
            },
            "flags": 80,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "do if (a) with (b) continue; else debugger; while (false)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

do
  if (a)
    with (b)
      continue;
  else
    debugger; while (false)

```

### Diagnostics

```javascript
✔ No errors
```

