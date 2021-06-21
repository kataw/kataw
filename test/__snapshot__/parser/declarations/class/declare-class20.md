# Kataw parser test case

## Input

`````js
declare class B {
  static get 1 (): {};
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
                            "staticToken": null,
                            "getKeyword": {
                                "kind": 16498,
                                "flags": 96,
                                "start": 17,
                                "end": 30
                            },
                            "setKeyword": null,
                            "key": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 30,
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
                                        "kind": 134234353,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "flags": 2097152,
                                    "start": 36,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 42
                },
                "flags": 4128,
                "start": 15,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static get 1 (): {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
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

