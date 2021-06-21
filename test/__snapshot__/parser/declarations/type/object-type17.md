# Kataw parser test case

## Input

`````js
type a = {():string};
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
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
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
                            "kind": 196,
                            "protoKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 11,
                                "end": 11
                            },
                            "staticToken": null,
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 13,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 19
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 20
                },
                "flags": 2097152,
                "start": 8,
                "end": 20
            },
            "flags": 2097152,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type a = {():string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

 type a = ((): string) 
```

### Diagnostics

```javascript
✔ No errors
```

