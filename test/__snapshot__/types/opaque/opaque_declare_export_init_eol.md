# Kataw parser test case

## Input

`````js
declare export opaque type Foo: string =
declare export opaque type Bar: string;
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
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
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "flags": 4128,
                "transformFlags": 0,
                "start": 7,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "declaration": {
                "kind": 312,
                "declareToken": null,
                "opaqueToken": {
                    "kind": 24822,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 21
                },
                "typeToken": {
                    "kind": 24775,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 26
                },
                "name": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 30
                },
                "typeParameters": null,
                "superType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 38
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 38
                },
                "impltype": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 48
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 48
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 48
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 14,
                "end": 48
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 7,
            "end": 48
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 48,
                "end": 55
            },
            "declaration": {
                "kind": 312,
                "declareToken": null,
                "opaqueToken": {
                    "kind": 24822,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 62
                },
                "typeToken": {
                    "kind": 24775,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 67
                },
                "name": {
                    "kind": 134299649,
                    "text": "Bar",
                    "rawText": "Bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 71
                },
                "typeParameters": null,
                "superType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 72,
                        "end": 79
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 79
                },
                "impltype": null,
                "flags": 2097152,
                "transformFlags": 0,
                "start": 55,
                "end": 79
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 48,
            "end": 79
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 79,
            "end": 80
        }
    ],
    "isModule": true,
    "source": "declare export opaque type Foo: string =\ndeclare export opaque type Bar: string;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 7, end: 14

```

