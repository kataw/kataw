# Kataw parser test case

## Input

`````js
type Foo = /*1*/
/*2*/  | /*3*/ Type1
/*4*/  | /*5*/ Type2
/*6*/  | /*7*/ TypeN /*8*/


/*9*/
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
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "start": 10,
                    "end": 25
                },
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Type1",
                                "rawText": "Type1",
                                "flags": 96,
                                "start": 25,
                                "end": 37
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 25,
                            "end": 37
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Type2",
                                "rawText": "Type2",
                                "flags": 96,
                                "start": 46,
                                "end": 58
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 46,
                            "end": 58
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "TypeN",
                                "rawText": "TypeN",
                                "flags": 96,
                                "start": 67,
                                "end": 79
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 67,
                            "end": 79
                        }
                    ],
                    "flags": 2097152,
                    "start": 37,
                    "end": 79
                },
                "flags": 2097152,
                "start": 10,
                "end": 79
            },
            "flags": 64,
            "start": 0,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "type Foo = /*1*/\n/*2*/  | /*3*/ Type1\n/*4*/  | /*5*/ Type2\n/*6*/  | /*7*/ TypeN /*8*/\n\n\n/*9*/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript

 /*8*/
```

### Diagnostics

```javascript
✔ No errors
```

