# Kataw parser test case

## Input

`````js
for (a in b) var c = {}; [];

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "type": null,
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 16,
                            "end": 23
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 24
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 24,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "for (a in b) var c = {}; [];\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

for (a in b)
  var c = {};
[];

```

### Diagnostics

```javascript
✔ No errors
```

