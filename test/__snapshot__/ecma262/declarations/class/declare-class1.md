# Kataw parser test case

## Input

`````js
declare class C1 {}

declare type T1 = number;

type T2 = number;
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
                "text": "C1",
                "rawText": "C1",
                "flags": 96,
                "start": 13,
                "end": 16
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
                    "start": 16,
                    "end": 19
                },
                "flags": 4128,
                "start": 16,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 200,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "start": 19,
                "end": 28
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 28,
                "end": 33
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 33,
                "end": 36
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 36,
                "end": 38
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 38,
                    "end": 45
                },
                "flags": 2097152,
                "start": 38,
                "end": 45
            },
            "flags": 4160,
            "start": 28,
            "end": 46
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 46,
                "end": 52
            },
            "name": {
                "kind": 134299649,
                "text": "T2",
                "rawText": "T2",
                "flags": 96,
                "start": 52,
                "end": 55
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 55,
                "end": 57
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 57,
                    "end": 64
                },
                "flags": 2097152,
                "start": 57,
                "end": 64
            },
            "flags": 65,
            "start": 46,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "declare class C1 {}\n\ndeclare type T1 = number;\n\ntype T2 = number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

declare class C1 {}
declare type T1 = number

type T2 = number

```

### Diagnostics

```javascript
✔ No errors
```

