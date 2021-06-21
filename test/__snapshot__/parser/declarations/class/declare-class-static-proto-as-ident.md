# Kataw parser test case

## Input

`````js
declare class B {
  static proto (): string;
}
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
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 32,
                                "start": 17,
                                "end": 26
                            },
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "start": 26,
                                "end": 32
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 34,
                                    "end": 34
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 36,
                                        "end": 43
                                    },
                                    "flags": 2097152,
                                    "start": 36,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 32,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 44
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 46
                },
                "flags": 4128,
                "start": 15,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static proto (): string;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

 declare class B {} 
```

### Diagnostics

```javascript
✔ No errors
```

