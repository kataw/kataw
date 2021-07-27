# Kataw parser test case

## Input

`````js
type A = { [string]: number };
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "key": {
                                "kind": 134234347,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "value": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 29
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type A = { [string]: number };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
type A = { [string]: number }
```

### Diagnostics

```javascript
✔ No errors
```

