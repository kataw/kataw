# Kataw parser test case

## Input

`````js
try {}
catch(
  // comment
  foo
) {}

try {}
catch(foo //comment
) {}

try {}
catch(
  /* comment */ foo
) {}

try {}
catch(
  foo /* comment */
) {}

try {}
catch(
  foo
  /* comment */
) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 32
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 6,
                "end": 37
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 37,
                "end": 42
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 44
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 42,
                "end": 45
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 51
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 55
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 69
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 70
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 45,
                "end": 70
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 37,
            "end": 70
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 70,
                "end": 75
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 77
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 75,
                "end": 78
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 84
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 105
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 109
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 110
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 78,
                "end": 110
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 70,
            "end": 110
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 110,
                "end": 115
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 117
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 115,
                "end": 118
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 124
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 125,
                    "end": 131
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 149,
                        "end": 149
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 150
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 118,
                "end": 150
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 110,
            "end": 150
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 150,
                "end": 155
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 157
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 155,
                "end": 158
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 164
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 171
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 191,
                        "end": 191
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 192
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 158,
                "end": 192
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 150,
            "end": 192
        }
    ],
    "isModule": false,
    "source": "try {}\ncatch(\n  // comment\n  foo\n) {}\n\ntry {}\ncatch(foo //comment\n) {}\n\ntry {}\ncatch(\n  /* comment */ foo\n) {}\n\ntry {}\ncatch(\n  foo /* comment */\n) {}\n\ntry {}\ncatch(\n  foo\n  /* comment */\n) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 192
}
```

### Printed

```javascript
try {} catch (foo) {}
try {} catch (foo) {}

try {} catch (foo) {}

try {} catch (foo) {}

try {} catch (foo) {}

```

### Diagnostics

```javascript
✔ No errors
```

