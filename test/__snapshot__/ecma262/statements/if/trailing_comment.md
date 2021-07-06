# Kataw parser test case

## Input

`````js
if (code === 92 /* '\' */) {}
if (code === 92 /* '\' */ /* '\' */) {}

if (code === 92) /* '\' */ {}
if (code === 92) { /* '\' */ }

if (
  1
  // Comment
) {
  a;
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
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "code",
                    "rawText": "code",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 8,
                    "end": 12
                },
                "right": {
                    "kind": 201392130,
                    "text": 92,
                    "rawText": "92",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 4,
                "end": 15
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 29
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 29,
                "end": 32
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "code",
                    "rawText": "code",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 38,
                    "end": 42
                },
                "right": {
                    "kind": 201392130,
                    "text": 92,
                    "rawText": "92",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 45
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 34,
                "end": 45
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 68
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 66,
                "end": 69
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 29,
            "end": 69
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 69,
                "end": 73
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "code",
                    "rawText": "code",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 79
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 79,
                    "end": 83
                },
                "right": {
                    "kind": 201392130,
                    "text": 92,
                    "rawText": "92",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 86
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 75,
                "end": 86
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 99
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 87,
                "end": 100
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 69,
            "end": 100
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 100,
                "end": 103
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "code",
                    "rawText": "code",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 109
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 109,
                    "end": 113
                },
                "right": {
                    "kind": 201392130,
                    "text": 92,
                    "rawText": "92",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 116
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 105,
                "end": 116
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 119
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 117,
                "end": 131
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 100,
            "end": 131
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 131,
                "end": 135
            },
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 97,
                "transformFlags": 0,
                "start": 137,
                "end": 141
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 162
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 158,
                            "end": 163
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 163
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 156,
                "end": 165
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 131,
            "end": 165
        }
    ],
    "isModule": false,
    "source": "if (code === 92 /* '\\' */) {}\nif (code === 92 /* '\\' */ /* '\\' */) {}\n\nif (code === 92) /* '\\' */ {}\nif (code === 92) { /* '\\' */ }\n\nif (\n  1\n  // Comment\n) {\n  a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 165
}
```

### Printed

```javascript
if (code === 92) {}
if (code === 92) {}

if (code === 92) {}

if (code === 92) {}

if (1) {
    a;
  }

```

### Diagnostics

```javascript
✔ No errors
```

