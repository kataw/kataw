# Kataw parser test case

## Input

`````js
type Fn0 = () => number;
`````

## Options

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
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "Fn0",
                "rawText": "Fn0",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 12,
                        "end": 12
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 13,
                        "end": 16
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 16,
                            "end": 23
                        },
                        "flags": 2097152,
                        "start": 16,
                        "end": 23
                    },
                    "flags": 2097152,
                    "start": 10,
                    "end": 23
                },
                "flags": 2097152,
                "start": 10,
                "end": 23
            },
            "flags": 64,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type Fn0 = () => number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

type Fn0 = () => number

```

### Diagnostics

```javascript
✔ No errors
```

