# Kataw parser test case

## Input

`````js
[,];
[,,];
[,,1,];
[,,1,1];
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 6
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 7
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 4,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 10,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 10,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 23
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 18,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "[,];\n[,,];\n[,,1,];\n[,,1,1];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
[,];
[, ,];

[, , 1,];

[, , 1, 1];

```

### Diagnostics

```javascript
✔ No errors
```

