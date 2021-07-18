# Kataw parser test case

## Input

`````js
x = {['_proto_']: x};

x = {['__proto__']: x};

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "_proto_",
                                        "rawText": "'_proto_'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 16
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 19
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "__proto__",
                                        "rawText": "'__proto__'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 41
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 28,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 26,
                    "end": 45
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 21,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "x = {['_proto_']: x};\n\nx = {['__proto__']: x};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
x = { ["'_proto_'"]: x };
x = { ["'__proto__'"]: x };

```

### Diagnostics

```javascript
✔ No errors
```

