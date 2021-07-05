# Kataw parser test case

## Input

`````js
switch /* comment 1 */ (x) /* comment 2 */   {

case /* comment 3 */ y:  /* comment 4 */ foo;



// comment 5



default /* comment 6 */ : /* comment 7 */ foo;

} /* comment 8 */
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 24,
                "end": 25
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 81,
                            "start": 46,
                            "end": 52
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 52,
                            "end": 70
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 70,
                            "end": 71
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 92
                                },
                                "flags": 16,
                                "start": 71,
                                "end": 93
                            }
                        ],
                        "flags": 16,
                        "start": 46,
                        "end": 93
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 81,
                            "start": 93,
                            "end": 120
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 120,
                            "end": 138
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 138,
                                    "end": 158
                                },
                                "flags": 16,
                                "start": 138,
                                "end": 159
                            }
                        ],
                        "flags": 16,
                        "start": 93,
                        "end": 159
                    }
                ],
                "flags": 16,
                "start": 46,
                "end": 159
            },
            "flags": 80,
            "start": 0,
            "end": 162
        }
    ],
    "isModule": false,
    "source": "switch /* comment 1 */ (x) /* comment 2 */   {\n\ncase /* comment 3 */ y:  /* comment 4 */ foo;\n\n\n\n// comment 5\n\n\n\ndefault /* comment 6 */ : /* comment 7 */ foo;\n\n} /* comment 8 */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 178
}
```

### Printed

```javascript

switch (x) {
  case y:
    foo;
  default
    foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

