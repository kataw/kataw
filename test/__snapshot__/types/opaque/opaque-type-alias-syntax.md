# Kataw parser test case

## Input

`````js
opaque type StringAlias = string;
opaque type ObjectAlias = {
  property: string,
  method(): number,
};
opaque type UnionAlias = 1 | 2 | 3;
opaque type AliasAlias: ObjectAlias = ObjectAlias;
opaque type VeryOpaque: AliasAlias = ObjectAlias;
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
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "StringAlias",
                "rawText": "StringAlias",
                "flags": 96,
                "start": 11,
                "end": 23
            },
            "typeParameters": null,
            "superType": null,
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "start": 25,
                    "end": 32
                },
                "flags": 2097152,
                "start": 25,
                "end": 32
            },
            "flags": 2097152,
            "start": 0,
            "end": 32
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 32,
            "end": 33
        },
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 65,
                "start": 33,
                "end": 40
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 40,
                "end": 45
            },
            "name": {
                "kind": 134299649,
                "text": "ObjectAlias",
                "rawText": "ObjectAlias",
                "flags": 96,
                "start": 45,
                "end": 57
            },
            "typeParameters": null,
            "superType": null,
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "property",
                                "rawText": "property",
                                "flags": 96,
                                "start": 61,
                                "end": 72
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 73,
                                    "end": 80
                                },
                                "flags": 2097152,
                                "start": 73,
                                "end": 80
                            },
                            "flags": 2097152,
                            "start": 61,
                            "end": 81
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 96,
                                "start": 81,
                                "end": 90
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 91,
                                    "end": 91
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 93,
                                        "end": 100
                                    },
                                    "flags": 2097152,
                                    "start": 93,
                                    "end": 100
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 90,
                                "end": 100
                            },
                            "flags": 2097152,
                            "start": 81,
                            "end": 101
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 59,
                    "end": 103
                },
                "flags": 2097152,
                "start": 59,
                "end": 103
            },
            "flags": 2097152,
            "start": 33,
            "end": 103
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 103,
            "end": 104
        },
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 65,
                "start": 104,
                "end": 111
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 111,
                "end": 116
            },
            "name": {
                "kind": 134299649,
                "text": "UnionAlias",
                "rawText": "UnionAlias",
                "flags": 96,
                "start": 116,
                "end": 127
            },
            "typeParameters": null,
            "superType": null,
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134217968,
                            "text": 1,
                            "rawText": "1",
                            "flags": 2097216,
                            "start": 129,
                            "end": 131
                        },
                        {
                            "kind": 134217968,
                            "text": 2,
                            "rawText": "2",
                            "flags": 2097216,
                            "start": 133,
                            "end": 135
                        },
                        {
                            "kind": 134217968,
                            "text": 3,
                            "rawText": "3",
                            "flags": 2097216,
                            "start": 137,
                            "end": 139
                        }
                    ],
                    "flags": 2097152,
                    "start": 131,
                    "end": 139
                },
                "flags": 2097152,
                "start": 129,
                "end": 139
            },
            "flags": 2097152,
            "start": 104,
            "end": 139
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 139,
            "end": 140
        },
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 65,
                "start": 140,
                "end": 147
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 147,
                "end": 152
            },
            "name": {
                "kind": 134299649,
                "text": "AliasAlias",
                "rawText": "AliasAlias",
                "flags": 96,
                "start": 152,
                "end": 163
            },
            "typeParameters": null,
            "superType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "ObjectAlias",
                        "rawText": "ObjectAlias",
                        "flags": 96,
                        "start": 164,
                        "end": 176
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 164,
                    "end": 176
                },
                "flags": 2097152,
                "start": 164,
                "end": 176
            },
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "ObjectAlias",
                        "rawText": "ObjectAlias",
                        "flags": 96,
                        "start": 178,
                        "end": 190
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 178,
                    "end": 190
                },
                "flags": 2097152,
                "start": 178,
                "end": 190
            },
            "flags": 2097152,
            "start": 140,
            "end": 190
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 190,
            "end": 191
        },
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 65,
                "start": 191,
                "end": 198
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 198,
                "end": 203
            },
            "name": {
                "kind": 134299649,
                "text": "VeryOpaque",
                "rawText": "VeryOpaque",
                "flags": 96,
                "start": 203,
                "end": 214
            },
            "typeParameters": null,
            "superType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "AliasAlias",
                        "rawText": "AliasAlias",
                        "flags": 96,
                        "start": 215,
                        "end": 226
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 215,
                    "end": 226
                },
                "flags": 2097152,
                "start": 215,
                "end": 226
            },
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "ObjectAlias",
                        "rawText": "ObjectAlias",
                        "flags": 96,
                        "start": 228,
                        "end": 240
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 228,
                    "end": 240
                },
                "flags": 2097152,
                "start": 228,
                "end": 240
            },
            "flags": 2097152,
            "start": 191,
            "end": 240
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 240,
            "end": 241
        }
    ],
    "isModule": false,
    "source": "opaque type StringAlias = string;\nopaque type ObjectAlias = {\n  property: string,\n  method(): number,\n};\nopaque type UnionAlias = 1 | 2 | 3;\nopaque type AliasAlias: ObjectAlias = ObjectAlias;\nopaque type VeryOpaque: AliasAlias = ObjectAlias;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 241
}
```

### Printed

```javascript







```

### Diagnostics

```javascript
✔ No errors
```

