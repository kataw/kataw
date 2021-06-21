# Kataw parser test case

## Input

`````js
declare class Foo {
  m(): this;
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 13,
                "end": 17
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
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "m",
                                "rawText": "m",
                                "flags": 96,
                                "start": 19,
                                "end": 23
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 24
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 4276321,
                                        "flags": 2097216,
                                        "start": 26,
                                        "end": 31
                                    },
                                    "flags": 2097152,
                                    "start": 26,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 17,
                    "end": 34
                },
                "flags": 4128,
                "start": 17,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "declare class Foo {\n  m(): this;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

 declare class Foo {(m(): this)} 
```

### Diagnostics

```javascript
✔ No errors
```

