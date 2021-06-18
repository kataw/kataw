# Kataw parser test case

## Input

`````js
declare class A {
  static constructor: Object; // error
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 26,
                                "end": 38
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 39,
                                    "end": 46
                                },
                                "flags": 2097152,
                                "start": 39,
                                "end": 46
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 47
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 58
                },
                "flags": 4128,
                "start": 15,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "declare class A {\n  static constructor: Object; // error\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

declare class A TODO!
```

### Diagnostics

```javascript
✔ No errors
```

