# Kataw parser test case

## Input

`````js
declare module 'foo' {
  declare export opaque type MyType = string;
}
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
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "module",
                "rawText": "module",
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "'foo'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 14,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 20
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": {
                            "kind": 82165,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 32
                        },
                        "decorators": null,
                        "classKeyword": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 32
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
                                "start": 32,
                                "end": 32
                            },
                            "flags": 4128,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 32
                    },
                    {
                        "kind": 257,
                        "exportKeyword": {
                            "kind": 4202582,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 39
                        },
                        "declaration": {
                            "kind": 312,
                            "declareToken": null,
                            "opaqueToken": {
                                "kind": 24822,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 46
                            },
                            "typeToken": {
                                "kind": 24775,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 51
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "MyType",
                                "rawText": "MyType",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 58
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
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 67
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 67
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 67
                        },
                        "namedExports": null,
                        "exportFromClause": null,
                        "fromClause": null,
                        "exportKind": 0,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 67
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 68
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 22,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 70
        }
    ],
    "isModule": true,
    "source": "declare module 'foo' {\n  declare export opaque type MyType = string;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 7, end: 14
✖ '; ' is not allowed here. Did you mean ';'? - start: 14, end: 20
✖ '{' is not allowed here. Did you mean ';'? - start: 20, end: 22
✖ Binding identifier expected - start: 32, end: 39
✖ The `export` keyword can only be used with the module goal - start: 32, end: 39

```

