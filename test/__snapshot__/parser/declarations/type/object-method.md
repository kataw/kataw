# Kataw parser test case

## Input

`````js
type T = { [[foo]](): X }
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
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 10,
                            "end": 23
                        },
                        "optionalToken": null,
                        "staticToken": false,
                        "flags": 0,
                        "start": 10,
                        "end": 23
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type T = { [[foo]](): X }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

