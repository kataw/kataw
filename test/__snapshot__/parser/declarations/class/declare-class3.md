# Kataw parser test case

## Input

`````js
declare class A { static () : number }
declare class B { () : number }
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
                "text": "A",
                "rawText": "A",
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
                            "kind": 196,
                            "protoKeyword": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 32,
                                "start": 17,
                                "end": 24
                            },
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 26,
                                "end": 26
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 29,
                                    "end": 36
                                },
                                "flags": 2097152,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 38
                },
                "flags": 4128,
                "start": 15,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        },
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 38,
                "end": 46
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 38,
                "end": 52
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 52,
                "end": 54
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "staticToken": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 58,
                                "end": 58
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 61,
                                    "end": 68
                                },
                                "flags": 2097152,
                                "start": 61,
                                "end": 68
                            },
                            "flags": 2097152,
                            "start": 56,
                            "end": 68
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 54,
                    "end": 70
                },
                "flags": 4128,
                "start": 54,
                "end": 70
            },
            "flags": 16,
            "start": 38,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "declare class A { static () : number }\ndeclare class B { () : number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

declare class A TODO!
declare class B TODO!
```

### Diagnostics

```javascript
✔ No errors
```

