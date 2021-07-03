# Kataw parser test case

## Input

`````js
type T = { [[foo]]?: X }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
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
                            "kind": 248,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 13,
                                "end": 16
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 18,
                                "end": 19
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 24
                },
                "flags": 2097152,
                "start": 8,
                "end": 24
            },
            "flags": 64,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type T = { [[foo]]?: X }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

type T = { [ [foo]]?X }

```

### Diagnostics

```javascript
✔ No errors
```

