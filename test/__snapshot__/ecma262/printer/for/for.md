# Kataw parser test case

## Input

`````js
for (;;) {}
for (var i = 0; i < 10; ++i) {}

for (;;) 0;
for (var i = 0; i < 10; ++i) 0;

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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 11,
                "end": 15
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 26
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 27
            },
            "condition": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 38
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 35,
                "end": 39
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 27,
                "end": 34
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 42
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 40,
                "end": 43
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 11,
            "end": 43
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 43,
                "end": 48
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 55
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 53,
                "end": 56
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 43,
            "end": 56
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 56,
                "end": 60
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 65
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 67
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 71
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 65,
                            "end": 71
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 71
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 56,
                "end": 72
            },
            "condition": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 83
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 84
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 84
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 74
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 76
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 79
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 72,
                "end": 79
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 87
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 85,
                "end": 88
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 56,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "for (;;) {}\nfor (var i = 0; i < 10; ++i) {}\n\nfor (;;) 0;\nfor (var i = 0; i < 10; ++i) 0;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

for (;;)
  {}
for (var i = 0; ++ i; i  < 10) {}

for (;;)
  0;

for (var i = 0; ++ i; i  < 10) 0;

```

### Diagnostics

```javascript
✔ No errors
```

