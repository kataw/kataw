# Kataw parser test case

## Input

`````js
switch /* comment 1 */ (x) /* comment 2 */   {

case /* comment 3 */ y:  /* comment 4 */ foo;
default /* comment 5 */ : /* comment 6 */ foo;

} /* comment 7 */
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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 46,
                            "end": 52
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 70
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 92
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 71,
                                "end": 93
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 93
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 101
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 119
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 119,
                                    "end": 139
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 119,
                                "end": 140
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 140
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 46,
                "end": 140
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 143
        }
    ],
    "isModule": false,
    "source": "switch /* comment 1 */ (x) /* comment 2 */   {\n\ncase /* comment 3 */ y:  /* comment 4 */ foo;\ndefault /* comment 5 */ : /* comment 6 */ foo;\n\n} /* comment 7 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 159
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

