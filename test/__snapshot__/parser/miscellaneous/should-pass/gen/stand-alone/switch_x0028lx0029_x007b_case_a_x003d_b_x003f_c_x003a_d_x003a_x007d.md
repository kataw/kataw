# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: switch (l) { case a = b ? c : d : }
## Input

`````js
switch (l) { case a = b ? c : d : }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "l",
                "rawText": "l",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 19,
                                "end": 21
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 25
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 29
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 31
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 12,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 35
            },
            "flags": 80,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "switch (l) { case a = b ? c : d : }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

switch(l) {
  case a = b ? c : d:

}
```

### Diagnostics

```javascript
✔ No errors
```

