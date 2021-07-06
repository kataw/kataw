# Kataw parser test case

## Input

`````js
try {
} catch (e) {
}
finally {
}

try {
} catch (e) {
}

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
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 21
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 65,
                "transformFlags": 0,
                "start": 21,
                "end": 29
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 31
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 40
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 38,
                "end": 42
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 48
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 51
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 54
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 56
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 42,
                "end": 56
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 33,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "try {\n} catch (e) {\n}\nfinally {\n}\n\ntry {\n} catch (e) {\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

try {} catch (e) {} finally {}
try {} catch (e) {}

```

### Diagnostics

```javascript
✔ No errors
```

